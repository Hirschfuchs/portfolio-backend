import cuid2 from '@paralleldrive/cuid2';
import { Column, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Dateneintrag } from '../dateneintrag/dateneintrag';
import { Datenzugriff } from '../datenzugriff/datenzugriff';

export class Datenquelle {
  /**
   * 26-stellige cuid2 beginnend mit "q"
   */
  @PrimaryColumn({ update: false, length: 25, type: 'char' })
  id = `q${cuid2.init({ length: 25 })}`;

  @Column({ length: 96 })
  title: string;

  @ManyToMany((type) => Datenzugriff, (type) => type.id)
  zugriffe: Datenzugriff[];

  @OneToMany((type) => Dateneintrag, (type) => type.id)
  eintraege: Dateneintrag[];
}
