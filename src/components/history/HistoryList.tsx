import ShoppingHistory from "../../models/ShoppingHistory";
import History from "./History";
import { groupedHistory } from "../../helper/utils";

interface Props {
  histories: ShoppingHistory[];
}

function HistoryList({ histories }: Props) {
  return (
    <div>
      {histories.length === 0 && (
        <div className="font-semibold text-center mt-10">No histories</div>
      )}
      {groupedHistory(histories).map((historyList) => (
        <div key={historyList.name} className="mt-5">
          <h2>{historyList.name}</h2>
          <div>
            {historyList.value.map((history) => (
              <History
                id={history._id}
                name={history.name}
                key={history._id}
                createdAt={history.createdAt}
                status={history.status}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
