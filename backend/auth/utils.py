from passlib.context import CryptContext
from datetime import timedelta, datetime
from ..config import Config
import jwt
import uuid 
import logging

JWT_EXPIRE='3600'

passwd_context = CryptContext(schemes=["bcrypt"])


def generate_password_hash(password: str) -> str:
    hash = passwd_context.hash(password)

    return hash


def verify_password(password: str, hashed_password: str) -> bool :
    return passwd_context.verify(password,hashed_password)


def create_access_token(user_data: dict, expire: timedelta = None, refresh: bool = False) -> str :
    payload = {}

    payload['user'] = user_data 
    payload['expire'] = datetime.now() + (
        expire if expire else timedelta(seconds=JWT_EXPIRE)
    )
    payload['jti'] = str(uuid.uuid4())
    payload['refresh'] = refresh
  
    token = jwt.encode(
        payload=payload,
        key=Config.JWT_SECRET, 
        algorithm=Config.JWT_ALGORITHM
    )

def decode_token(token: str) -> dict :
    try :
        token_data = jwt.decode(
            payload=token,
            key=Config.JWT_SECRET,
            algorithm=Config.JWT_ALGORITHM
        )

        return token_data
    
    except jwt.PyJWTError as e :
        logging.exception(e)
        return None