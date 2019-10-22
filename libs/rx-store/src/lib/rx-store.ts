import { Observable, Subject, BehaviorSubject } from 'rxjs';

export interface Action {
    type: string;
    payload: any;
}

export type reducerFunction<T> = (state: T, action: Action) => T;

export class RxStore<T> {
    private state: T;
    private subject$ = new BehaviorSubject<T>(this.get());

    constructor(initialState: T, private reducer: reducerFunction<T>) {
        this.set(initialState);
    }

    public select$(): Observable<T> {
        return this.subject$.asObservable();
    }

    private dispatch(action: Action) {
        const currentState = this.get();
        const newState = this.reducer(currentState, action);
        this.set(newState);
    }

    private get(): T {
        return { ...this.state}
    }

    private set(newState: T) {
        this.state = { ...newState};
        this.subject$.next(this.get());
    }
}