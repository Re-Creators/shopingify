export default interface Cart {
  _id: string;
  name: string;
  qty: number;
  category: {
    _id: string;
    name: string;
  };
}
