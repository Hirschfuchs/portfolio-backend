import cuid2 from '@paralleldrive/cuid2';
import { Column, ManyToMany, PrimaryColumn } from 'typeorm';
import { Datenquelle } from '../datenquelle/datenquelle';
import { User } from '../user/user';

export class Datenzugriff {
  /**
   * 26-stellige cuid2 beginnend mit "z"
   */
  @PrimaryColumn({ update: false, length: 25, type: 'char' })
  id = `z${cuid2.init({ length: 25 })}`;

  @ManyToMany((type) => User, (type) => type.id)
  user: User[];

  @ManyToMany((type) => Datenquelle, (type) => type.id)
  quellen: Datenquelle[];

  @Column({ default: false })
  write: boolean;
}
