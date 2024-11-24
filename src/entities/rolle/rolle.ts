import cuid2 from '@paralleldrive/cuid2';
import { Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Recht } from '../recht/recht';
import { User } from '../user/user';

export class Rolle {
  /**
   * 26-stellige cuid2 beginnend mit "r"
   */
  @PrimaryColumn({ update: false, length: 25, type: 'char' })
  id = `r${cuid2.init({ length: 25 })}`;

  @Column({ length: 96 })
  title: string;

  @OneToMany((type) => User, (type) => type.id)
  user: User[];

  @OneToMany((type) => Recht, (type) => type.id)
  rechte: Recht[];
}
