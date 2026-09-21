from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import create_access_token
from app.db.database import get_db
from app.schemas.auth import (
    ForgotPasswordRequest,
    ForgotPasswordResponse,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
    ResetPasswordRequest,
    VerifyEmailResponse,
)
from app.services.auth_service import (
    authenticate_user,
    create_password_reset,
    get_user_by_email,
    register_user,
    reset_user_password,
    verify_user_email,
)


router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=RegisterResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db),
):
    if request.password != request.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match.",
        )

    try:
        user = register_user(
            db,
            first_name=request.first_name,
            last_name=request.last_name,
            email=request.email,
            phone=request.phone,
            password=request.password,
        )

        return {
            "message": (
                "Account created successfully. "
                "Please verify your email."
            ),
            "email": user.email,
        }

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )


@router.post(
    "/verify-email",
    response_model=VerifyEmailResponse,
)
def verify_email(
    token: str,
    db: Session = Depends(get_db),
):
    try:
        verify_user_email(
            db,
            token,
        )

        return {
            "message": (
                "Email verified successfully. "
                "Your account is now active."
            )
        }

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )


@router.post(
    "/login",
    response_model=LoginResponse,
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):
    try:
        user = authenticate_user(
            db,
            request.email,
            request.password,
        )

        access_token = create_access_token(
            user_id=user.id,
            email=user.email,
        )

        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user_id": user.id,
            "email": user.email,
        }

    except ValueError as error:
        raise HTTPException(
            status_code=401,
            detail=str(error),
        )


@router.post(
    "/forgot-password",
    response_model=ForgotPasswordResponse,
)
def forgot_password(
    request: ForgotPasswordRequest,
    db: Session = Depends(get_db),
):
    user = get_user_by_email(
        db,
        request.email,
    )

    if user:
        create_password_reset(
            db,
            user,
        )

    return {
        "message": (
            "If an account exists for this email, "
            "password reset instructions have been sent."
        )
    }


@router.post(
    "/reset-password",
    response_model=ForgotPasswordResponse,
)
def reset_password(
    request: ResetPasswordRequest,
    db: Session = Depends(get_db),
):
    if request.password != request.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match.",
        )

    try:
        reset_user_password(
            db,
            request.token,
            request.password,
        )

        return {
            "message": "Password reset successfully."
        }

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )