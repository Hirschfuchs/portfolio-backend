import cuid2 from '@paralleldrive/cuid2';
import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * Entity eines Users autorisierten Nutzers des Systems
 *
 * <li> beinhaltet Login-Daten zum Zugriff über die Weboberfläche (klassischer Login-Prozess)
 * <li> beinhaltet Token zum zeitbeschränkten Zugriff über ein URL-Token
 */
@Entity()
export class User {
  /**
   * 26-stellige cuid2 beginnend mit "u"
   */
  @PrimaryColumn({ update: false, length: 25, type: 'char' })
  id = `u${cuid2.init({ length: 25 })}`;

  /**
   * Freitext-Anzeigename des Nutzers (verpflichtend)
   */
  @Column({ length: 64 })
  nickname: string;

  /**
   * Verschlüsseltes Passwort des Nutzers
   *
   * <li> Wenn ein Passwort hinterlegt ist, ist der Login über die Weboberfläche möglich
   */
  @Column({ length: 512 })
  password: string | undefined;

  /**
   * Token für Zugriff mit Rollenzuteilung über URL
   *
   * <li> 42-stellige cuid2 beginnend mit "t"
   * <li> Wenn Token hinterlegt ist, ist der Zugang über URL möglich
   */
  @Column({ length: 42, type: 'char' })
  token: `t${string}` | undefined;

  /**
   * Zeitpunkt, nach dem der Zugang über Token nicht mehr möglich ist
   */
  @Column()
  tokenRevocation: Date | undefined;

  /**
   * Ermöglicht gänzliche Sperrung des Zugangs
   */
  // @Column({ default: true })
  // active: boolean;
  //
  // @ManyToOne((type) => Rolle, (type) => type.id)
  // role: Rolle | undefined;
  //
  // @ManyToMany((type) => Datenzugriff, (type) => type.id)
  // zugriffe: Datenzugriff[];
  //
  // @Column({ length: 64 })
  // vorname: string | undefined;
  //
  // @Column({ length: 64 })
  // nachname: string | undefined;
  //
  // @Column({ length: 128 })
  // firma: string | undefined;
  //
  // @Column({ length: 96 })
  // mail: string | undefined;
  //
  // @Column({ length: 32 })
  // tel: string | undefined;
}
