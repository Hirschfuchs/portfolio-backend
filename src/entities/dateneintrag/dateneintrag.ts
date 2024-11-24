import cuid2 from '@paralleldrive/cuid2';
import { Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Datenquelle } from '../datenquelle/datenquelle';

type DateneintragID = `e${string}`;

/**
 * Entry eines Eintrags in eine Datenquelle mit Historisierung
 */
export class Dateneintrag {
  /**
   * 33-stellige cuid2 beginnend mit "e"
   *
   * Bei jeder Änderung wird ein neuer Eintrag erzeugt, daher wird die Länge der ID erhöht
   */
  @PrimaryColumn({ update: false, length: 33, type: 'char' })
  id: DateneintragID = `e${cuid2.init({ length: 33 })}`;

  @ManyToOne((type) => Datenquelle, (type) => type.id)
  user: Datenquelle[];

  @Column({ length: 128 })
  entryKey: string;

  @Column({ length: 256 })
  entryValue: string;

  @Column()
  lastChange: Date;

  @Column({ length: 33 })
  pointer: DateneintragID | undefined;
}
