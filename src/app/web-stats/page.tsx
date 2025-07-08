import PageLayout from "@/Components/PageLayout/PageLayout"
import { IMixItemCollection, IError, IMixItem } from "./types";
import style from './WebStats.module.css';
import config from "@/config";

const getstats = async () => {
  try {
      const res = await fetch(`${config.apiUrl}/mixCount`, {
        next: { revalidate: 10 },
      });
      const result = await res.json();

      const sortedItemsByMixCount = result.mixes.sort((a: IMixItem, b: IMixItem) => b.mixCount - a.mixCount);

      const sortedResults =  {
        total: sortedItemsByMixCount.length ?? 0,
        items: sortedItemsByMixCount
      };

      return {...sortedResults, whenRevalidated: new Date().toISOString()};


  } catch(error) {
      console.log(error);
      return {error: true}
  }
}


export default async function WebStats() {
    let lastRevalidated: string;
    const mixData: IMixItemCollection | IError = await getstats();

    if('whenRevalidated' in mixData && mixData.whenRevalidated) {
      const revalDate = new Date(mixData.whenRevalidated);
      const datePart = revalDate.toLocaleDateString("en-GB", {
        weekday: 'short',
        year: 'numeric',
        day: '2-digit',
        timeZoneName: 'short'
      });

      const timePart = revalDate.toLocaleTimeString("en-GB", {
        hour: '2-digit',
        minute:  '2-digit',
        second:  '2-digit',
      });


      lastRevalidated = `${datePart} - ${timePart}`;
    } else {
      lastRevalidated = '';
    }

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
      <p>Latest update was on {lastRevalidated}</p>
      <p>This will show you the number of times each mix has been listened to</p>
      <h2>Number of Mixes = {'total' in mixData ? mixData.total : ''}</h2>
      <ul>
        {ListItems}
      </ul>
    </PageLayout>
  );
}
