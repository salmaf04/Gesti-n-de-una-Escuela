"""added date column to mean mainteniance

Revision ID: fc3b8c5f2472
Revises: 19e19e2d0699
Create Date: 2025-01-14 21:01:59.947046

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'fc3b8c5f2472'
down_revision: Union[str, None] = '19e19e2d0699'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('mean_maintenance_table', sa.Column('date', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('mean_maintenance_table', 'date')
    # ### end Alembic commands ###
