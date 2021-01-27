import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text')
  text?: string;

  @Column('boolean')
  is_starred = false;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: string;

  @Column('text')
  created_by?: string;

  @Column({ type: 'timestamp', nullable: true })
  updated_at?: string;

  @Column({ type: 'text', nullable: true })
  updated_by?: string;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at?: string;

  @Column({ type: 'text', nullable: true })
  deleted_by?: string;
}

@Entity({ name: 'order_notes' })
export class OrderNote extends Note {
  @Column('text')
  order_id?: string = undefined;
}

@Entity({ name: 'member_notes' })
export class MemberNote extends Note {
  @Column('text')
  member_id?: string = undefined;
}
