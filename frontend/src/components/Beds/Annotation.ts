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
    x: 174,
    y: 383,
    width: 160,
    height: 149,
    occupiedPlaces: 2,
    freePlaces: 2,
    id: 1,
    usernames: ['User55', 'User52'],
  },
  {
    x: 916,
    y: 512,
    width: 156,
    height: 159,
    occupiedPlaces: 1,
    freePlaces: 3,
    id: 2,
    usernames: ['User3'],
  },
  {
    x: 913,
    y: 320,
    width: 167,
    height: 157,
    occupiedPlaces: 3,
    freePlaces: 1,
    id: 3,
    usernames: ['User4', 'User5', 'User6'],
  },
  {
    x: 761,
    y: 23,
    width: 145,
    height: 154,
    occupiedPlaces: 0,
    freePlaces: 4,
    id: 4,
    usernames: [],
  },
  {
    x: 159,
    y: 107,
    width: 78,
    height: 70,
    occupiedPlaces: 1,
    freePlaces: 0,
    id: 5,
    usernames: ['User7'],
  },
  {
    x: 267,
    y: 112,
    width: 87,
    height: 70,
    occupiedPlaces: 2,
    freePlaces: 2,
    id: 6,
    usernames: ['User8', 'User9'],
  },
  {
    x: 383,
    y: 93,
    width: 83,
    height: 83,
    occupiedPlaces: 3,
    freePlaces: 1,
    id: 7,
    usernames: ['User10', 'User11', 'User12'],
  },
  {
    x: 614,
    y: 109,
    width: 82,
    height: 69,
    occupiedPlaces: 1,
    freePlaces: 3,
    id: 8,
    usernames: ['User13'],
  },
  {
    x: 381,
    y: 520,
    width: 91,
    height: 81,
    occupiedPlaces: 0,
    freePlaces: 4,
    id: 9,
    usernames: [],
  },
];

export default annotations;
