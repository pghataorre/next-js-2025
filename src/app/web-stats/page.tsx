import PageLayout from "@/Components/PageLayout/PageLayout"
import { IMixItemCollection, IError, IMixItem } from "./types";
import style from './WebStats.module.css';
import config from "@/config";

export async function getstats() {
  try {
      const res = await fetch(`${config.apiUrl}/mixCount`);
      const result = await res.json();
      const sortedItemsByMixCount = result.mixes.sort((a,b) => b.mixCount - a.mixCount);

      const sortedResults =  {
        total: sortedItemsByMixCount.length ?? 0,
        items: sortedItemsByMixCount
      };

      return sortedResults;


  } catch(error) {
      console.log(error);
      return {error: true}
  }
}


export default async function WebStats() {
    const mixData = await getstats() as IMixItemCollection | IError;
    let ListItems = null; 

    if ('items' in mixData && Array.isArray(mixData.items)) {
        ListItems = mixData.items.map((item: IMixItem) => {
          return(
            <li key={`${item.mixid}-${item.mixTitle}`} className={style['mix-item']}>
              <div>
                {item.mixTitle}
              </div>
              <div className={style['count-label']}>
                COUNT: {item.mixCount}
              </div>
            </li>
          )
        })
    }

  return (
    <PageLayout>
      <h2>WEB STATS FOR THE MIX PLAYS FROM PERMY.CO.UK</h2>
      <p>This will show you the number of times each mix has been listened to</p>
      <h2>Number of Mixes = {'total' in mixData ? mixData.total : ''}</h2>
      <ul>
        {ListItems}
      </ul>
    </PageLayout>
  );
}
