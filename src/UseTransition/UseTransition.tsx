// useTransition manages transitions and animations effectively without blocking the user interface
// it allows us to defer the rendering of certain components, this helps prevent performance bottlenecks
// and improves the user experience during intense updates or transitions
// main goal: allow React apps to stay responsive and maintain smooth animations even during heavy operations
// such as data fetching, large-scale updates, etc...

/*
import { useState, useEffect, useTransition } from "react";

const UseTransition = () => {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [startTransition, isPending] = useTransition();

  const fetchMoreData = async () => {
    try {
      // 1 sec delay simulation //
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // get data based on current page //
      const response = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data["data"]]);
    } catch (err) {
      console.error("Error fetching data: ", err);
    } finally {
        setIsFetching(false);
    }
  };

  useEffect((): (() => void) | void => {
    if (isFetching) {
      startTransition(() => {
        fetchMoreData();
      });
    }

    return () => {

    };

  }, [isFetching, startTransition]);

  const handleScroll = () => {
    const windowHeight: number = window.innerHeight;
    const documentHeight: number = document.documentElement.scrollHeight;
    const scrollTop: number = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchMoreData();
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        {items.map((item, index) => {
          return (
            <div key={item._id}>
              <p>{item.name}</p>
              <p>{item.trips}</p>
            </div>
          );
        })}
      </div>
      {isPending && <div>Loading more items...</div>}
    </div>
  );
};

export default UseTransition;
*/