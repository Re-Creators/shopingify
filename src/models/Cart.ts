export default interface Cart {
  _id: string;
  name: string;
  qty: number;
  isCompleted: boolean;
  category: {
    _id: string;
    name: string;
  };
}
