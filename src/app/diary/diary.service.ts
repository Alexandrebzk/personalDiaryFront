import {Injectable} from '@angular/core';
import {Diary} from './models/diary.model';
import {Observable, of} from 'rxjs';
import {Field} from './models/field.model';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor() {
  }

  getDiary(): Observable<Diary> {
    const diary = {
      id: '1',
      title: 'Diary Title Test',
      fields: [
        {
          id: '1',
          title: 'Field Title Test 1',
          unit: undefined,
          type: undefined
        } as Field,
        {
          id: '2',
          title: 'Field Title Test 1',
          unit: undefined,
          type: undefined
        } as Field,
      ]
    } as Diary;
    return of(diary);
  }

  getDiaries(): Observable<Diary[]> {
    const diary = {
      id: '1',
      title: 'Diary Title Test 1',
      fields: [
        {
          id: '1',
          title: 'Field Title Test 1',
          unit: undefined,
          type: undefined
        } as Field,
        {
          id: '2',
          title: 'Field Title Test 1',
          unit: undefined,
          type: undefined
        } as Field,
      ]
    } as Diary;

    const diary2 = {
      id: '2',
      title: 'Diary Title Test 2',
      fields: [
        {
          id: '3',
          title: 'Field Title Test 1',
          unit: undefined,
          type: undefined
        } as Field,
        {
          id: '4',
          title: 'Field Title Test 1',
          unit: undefined,
          type: undefined
        } as Field,
      ]
    } as Diary;

    const diaries = [diary, diary2];
    return of(diaries);
  }
}
