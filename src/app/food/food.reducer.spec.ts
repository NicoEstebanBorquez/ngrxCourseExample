import { ACTIONS, IFood, food_reducer, Action } from "./food.reducer";

describe('Food Reducer', () => {

    it('should add food to new state', () => {
        let initialState: Array<IFood> = [];

        let apple: IFood = {
            id: 0,
            name: "apple",
            description: "crunchy",
            color: "red",
            group: "fruit"
        }

        let addAction: Action = {
            type: ACTIONS.ADD_FOOD,
            payload: apple
        }

        let newState = food_reducer(initialState, addAction)

        expect(initialState.length).toBe(0);
        expect(newState.length).toBe(1);
        expect(newState[0].name).toContain("apple");
    })

    it('should remove an existing food from state', () => {
        let initialState: Array<IFood> = [];

        let apple: IFood = {
            id: 0,
            name: "apple",
            description: "crunchy",
            color: "red",
            group: "fruit"
        }

        let banana: IFood = {
            id: 1,
            name: "banana",
            description: "soft",
            color: "yellow",
            group: "fruit"
        }

        let addAction: Action = {
            type: ACTIONS.ADD_FOOD,
            payload: apple
        }

        let firstUpdatedState = food_reducer(initialState, { type: ACTIONS.ADD_FOOD, payload: apple })
        let secondUpdatedState = food_reducer(firstUpdatedState, { type: ACTIONS.ADD_FOOD, payload: banana })
        expect(initialState.length).toBe(0);
        expect(firstUpdatedState.length).toBe(1);
        expect(secondUpdatedState.length).toBe(2);

        let thirdUpdatedState = food_reducer(secondUpdatedState, { type: ACTIONS.REMOVE_FOOD, payload: { id: 0 } })
        expect(thirdUpdatedState.length).toBe(1);

        console.log(firstUpdatedState);
        console.log(secondUpdatedState);
        console.log(thirdUpdatedState);

    })

})