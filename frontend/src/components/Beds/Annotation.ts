export interface AnnotationData {
    x: number;
    y: number;
    width: number;
    height: number;
    occupiedPlaces: number;
    freePlaces: number;
    id: number;
    usernames: string[];
}

export const annotations: AnnotationData[] = [
    {
        "x": 82,
        "y": 153,
        "width": 129,
        "height": 184,
        "occupiedPlaces": 3,
        "freePlaces": 1,
        "id": 87,
        "usernames": ["User1", "User2", "User3"]
    },
    {
        "x": 219,
        "y": 153,
        "width": 120,
        "height": 184,
        "occupiedPlaces": 5,
        "freePlaces": 2,
        "id": 46,
        "usernames": ["User1", "User2", "User3", "User4", "User5"]
    },
    {
        "x": 348,
        "y": 155,
        "width": 126,
        "height": 181,
        "occupiedPlaces": 1,
        "freePlaces": 3,
        "id": 73,
        "usernames": ["User1"]
    },
    {
        "x": 907,
        "y": 160,
        "width": 120,
        "height": 178,
        "occupiedPlaces": 4,
        "freePlaces": 3,
        "id": 25,
        "usernames": ["User1", "User2", "User3", "User4"]
    },
    {

        "x": 1036,
        "y": 158,
        "width": 125,
        "height": 179,
        "occupiedPlaces": 1,
        "freePlaces": 3,
        "id": 32,
        "usernames": ["User1"]
    },
    {

        "x": 187,
        "y": 391,
        "width": 119,
        "height": 97,
        "occupiedPlaces": 2,
        "freePlaces": 2,
        "id": 45,
        "usernames": ["User1", "User2"]
    },
    {

        "x": 316,
        "y": 391,
        "width": 122,
        "height": 97,
        "occupiedPlaces": 3,
        "freePlaces": 2,
        "id": 79,
        "usernames": ["User1", "User2", "User3"]
    },
    {
        "x": 901,
        "y": 391,
        "width": 122,
        "height": 97,
        "occupiedPlaces": 2,
        "freePlaces": 2,
        "id": 36,
        "usernames": ["User1", "User2"]
    },
    {
        "x": 1030,
        "y": 391,
        "width": 129,
        "height": 97,
        "occupiedPlaces": 5,
        "freePlaces": 0,
        "id": 14,
        "usernames": ["User1", "User2", "User3", "User4", "User5"]
    }
];

export default annotations;
