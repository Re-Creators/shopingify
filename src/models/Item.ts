export default interface Item {
  _id: string;
  name: string;
  note?: string;
  image?: string;
  category: {
    _id: string;
    name: string;
  };
}
