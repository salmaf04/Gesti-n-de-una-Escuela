"""Add teacher requests foreign keys

Revision ID: b999dbf704f5
Revises: 08ab7f208c9a
Create Date: 2025-01-18 12:30:26.591019

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b999dbf704f5'
down_revision: Union[str, None] = '08ab7f208c9a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
