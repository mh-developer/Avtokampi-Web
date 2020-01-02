interface AvtokampiModel {
    avtokampId: number;
    naziv: string;
    opis: string;
    naslov: string;
    telefon: string;
    nazivLokacije: string;
    koordinataX: number;
    koordinataY: number;
    is_active: boolean;
    regija: number;
    created_at: Date;
    updated_at: Date;
}

export class Avtokamp implements AvtokampiModel {
    private _avtokampId: number;
    private _naziv: string;
    private _opis: string;
    private _naslov: string;
    private _telefon: string;
    private _nazivLokacije: string;
    private _koordinataX: number;
    private _koordinataY: number;
    private _is_active: boolean;
    private _regija: number;
    private _created_at: Date;
    private _updated_at: Date;

    get avtokampId(): number {
      return this._avtokampId;
    }

    set avtokampId(value: number) {
      this._avtokampId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get opis(): string {
      return this._opis;
    }

    set opis(value: string) {
      this._opis = value;
    }

    get naslov(): string {
      return this._naslov;
    }

    set naslov(value: string) {
      this._naslov = value;
    }

    get telefon(): string {
      return this._telefon;
    }

    set telefon(value: string) {
      this._telefon = value;
    }

    get nazivLokacije(): string {
      return this._nazivLokacije;
    }

    set nazivLokacije(value: string) {
      this._nazivLokacije = value;
    }

    get koordinataX(): number {
      return this._koordinataX;
    }

    set koordinataX(value: number) {
      this._koordinataX = value;
    }

    get koordinataY(): number {
      return this._koordinataY;
    }

    set koordinataY(value: number) {
      this._koordinataY = value;
    }

    get is_active(): boolean {
      return this._is_active;
    }

    set is_active(value: boolean) {
      this._is_active = value;
    }

    get regija(): number {
      return this._regija;
    }

    set regija(value: number) {
      this._regija = value;
    }

    get created_at(): Date {
      return this._created_at;
    }

    set created_at(value: Date) {
      this._created_at = value;
    }

    get updated_at(): Date {
      return this._updated_at;
    }

    set updated_at(value: Date) {
      this._updated_at = value;
  }
}
