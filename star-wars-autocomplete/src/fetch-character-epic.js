import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, tap, takeUntil } from 'rxjs/operators';
import { FETCH_CHARACTERS, fetchCharactersFulfilled } from './actions';

const ENDPOINT = 'http://star-wars-characters.glitch.me/api/search';

const fetchCharactersEpic = (action$, state) => {
  return action$.pipe(
    ofType(FETCH_CHARACTERS),
    mergeMap((action) =>
      ajax.getJSON(`${ENDPOINT}/${action.payload.searchTerm}`).pipe(
        // debugging
        tap((value) => console.log('stream value', value)),
        map((response) => fetchCharactersFulfilled(response.results)),
        takeUntil(
          action$.pipe(
            ofType(FETCH_CHARACTERS),
            tap((value) => console.log('cancelling ', value)),
          ),
        ),
      ),
    ),
  );
};

export default fetchCharactersEpic;
