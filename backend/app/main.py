from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings


app = FastAPI(
    title=f"{settings.app_name} API",
    description="API for Hair Radiance by Kuhle Salon",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.frontend_url,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.app_name} API"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": settings.app_name,
    }