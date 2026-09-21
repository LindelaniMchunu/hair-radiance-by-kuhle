from datetime import datetime, timedelta, timezone

from sqlalchemy.orm import Session

from app.core.security import (
    create_password_reset_token,
    create_verification_token,
    hash_password,
    verify_password,
)
from app.db.models import User


VERIFICATION_TOKEN_EXPIRY_HOURS = 24
PASSWORD_RESET_TOKEN_EXPIRY_HOURS = 1


def get_user_by_email(
    db: Session,
    email: str,
) -> User | None:
    return (
        db.query(User)
        .filter(User.email == email.lower())
        .first()
    )


def register_user(
    db: Session,
    *,
    first_name: str,
    last_name: str,
    email: str,
    phone: str,
    password: str,
) -> User:

    normalized_email = email.lower()

    existing_user = get_user_by_email(
        db,
        normalized_email,
    )

    if existing_user:
        raise ValueError(
            "An account with this email already exists."
        )

    verification_token = create_verification_token()

    now = datetime.now(timezone.utc)

    user = User(
        first_name=first_name.strip(),
        last_name=last_name.strip(),
        email=normalized_email,
        phone=phone.strip(),
        password_hash=hash_password(password),
        is_active=False,
        is_email_verified=False,
        verification_token=verification_token,
        verification_token_expires_at=(
            now
            + timedelta(
                hours=VERIFICATION_TOKEN_EXPIRY_HOURS
            )
        ),
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


def verify_user_email(
    db: Session,
    token: str,
) -> User:

    user = (
        db.query(User)
        .filter(User.verification_token == token)
        .first()
    )

    if not user:
        raise ValueError(
            "Invalid verification token."
        )

    if not user.verification_token_expires_at:
        raise ValueError(
            "Verification token is invalid."
        )

    expires_at = user.verification_token_expires_at

    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(
            tzinfo=timezone.utc
        )

    if expires_at < datetime.now(timezone.utc):
        raise ValueError(
            "Verification token has expired."
        )

    user.is_email_verified = True
    user.is_active = True
    user.verification_token = None
    user.verification_token_expires_at = None

    db.commit()
    db.refresh(user)

    return user


def authenticate_user(
    db: Session,
    email: str,
    password: str,
) -> User:

    user = get_user_by_email(
        db,
        email,
    )

    if not user:
        raise ValueError(
            "Invalid email or password."
        )

    if not verify_password(
        password,
        user.password_hash,
    ):
        raise ValueError(
            "Invalid email or password."
        )

    if not user.is_email_verified:
        raise ValueError(
            "Please verify your email before signing in."
        )

    if not user.is_active:
        raise ValueError(
            "Your account is not active."
        )

    return user


def create_password_reset(
    db: Session,
    user: User,
) -> str:

    token = create_password_reset_token()

    user.password_reset_token = token

    user.password_reset_token_expires_at = (
        datetime.now(timezone.utc)
        + timedelta(
            hours=PASSWORD_RESET_TOKEN_EXPIRY_HOURS
        )
    )

    db.commit()

    return token


def reset_user_password(
    db: Session,
    token: str,
    password: str,
) -> User:

    user = (
        db.query(User)
        .filter(User.password_reset_token == token)
        .first()
    )

    if not user:
        raise ValueError(
            "Invalid password reset token."
        )

    if not user.password_reset_token_expires_at:
        raise ValueError(
            "Password reset token is invalid."
        )

    expires_at = user.password_reset_token_expires_at

    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(
            tzinfo=timezone.utc
        )

    if expires_at < datetime.now(timezone.utc):
        raise ValueError(
            "Password reset token has expired."
        )

    user.password_hash = hash_password(password)

    user.password_reset_token = None
    user.password_reset_token_expires_at = None

    db.commit()
    db.refresh(user)

    return user