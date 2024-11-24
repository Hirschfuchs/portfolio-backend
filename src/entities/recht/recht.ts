import cuid2 from '@paralleldrive/cuid2';
import { Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Rolle } from '../rolle/rolle';

export class Recht {
  /**
   * 26-stellige cuid2 beginnend mit "s"
   */
  @PrimaryColumn({ update: false, length: 25, type: 'char' })
  id = `s${cuid2.init({ length: 25 })}`;

  @Column({ length: 96 })
  title: string;

  @ManyToOne((type) => Rolle, (type) => type.id)
  rolle: Rolle;
}
