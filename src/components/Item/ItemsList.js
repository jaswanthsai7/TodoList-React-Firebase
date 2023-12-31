import React, { useContext } from "react";
import CartDatas from "../../context/cart-con";
import { toast } from "react-toastify";
import $ from 'jquery'
import "react-toastify/dist/ReactToastify.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Apple iPhone XR (Red, 128 GB)",
    description:
      "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Apple iPhone XR (Red, 128 GB)",
    description:
      "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Apple iPhone XR (Red, 128 GB)",
    description:
      "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Apple iPhone XR (Red, 128 GB)",
    description:
      "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display",
    price: 18.99,
  },
];

export default function ItemsList(props) {
  // const [itemLists, setItemLists] = useState([]);
  //   const [dummyItem, setDummyItem] = useState([]);

  const usess = useContext(CartDatas);

  const addToCart = (items) => {
    console.log("Add To cart");
    // const dummyItem = itemLists;
    // dummyItem.push({
    //   id: items.id,
    //   name: items.name,
    //   description: items.description,
    //   price: items.price,
    // });
    // setItemLists((prev) => {
    //   console.log(prev);
    //   console.log(items);
    //   return [...prev, items];
    // });

    usess.addItem({
      id: items.id,
      name: items.name,
      amount: 1,
      description: items.description,
      price: items.price,
    });
    // usess.addItems([...itemLists,items]);
    // setItemLists(dummyItem);
    // usess.addItems(dummyItem);
    // props.addToCart(itemLists);
    // console.log(usess.items);
  };

  // let content = "";
  const addedToast = () => {
    const itemm = usess.items;
    const last = itemm[itemm.length - 1];

    toast.success(` Added to Cart`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

    // const timer = setTimeout(() => {
    //   content = $
    // }, 2000);
    // clearTimeout(timer);
  };

  // useEffect(()=>{
  // console.log(1)

  // },[itemsList])

  return (
    <>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          <div className="col-md-10">
            {DUMMY_MEALS.map((item) => (
              <div key={item.id}>
                <div className="card card-body mt-2">
                  <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                    <div className="mr-2 mb-3 mb-lg-0">
                      <img
                        src="https://i.imgur.com/5Aqgz7o.jpg"
                        width={150}
                        height={150}
                        alt=""
                      />
                    </div>

                    <div className="media-body">
                      <h6 className="media-title font-weight-semibold">
                        <a href="#" data-abc="true">
                          {item.name}
                        </a>
                      </h6>
                      <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                        <li className="list-inline-item">
                          <a href="#" className="text-muted" data-abc="true">
                            Phones
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="text-muted" data-abc="true">
                            Mobiles
                          </a>
                        </li>
                      </ul>
                      <p className="mb-3">{item.description}</p>
                      <ul className="list-inline list-inline-dotted mb-0">
                        <li className="list-inline-item">
                          All items from{" "}
                          <a href="#" data-abc="true">
                            Mobile point
                          </a>
                        </li>
                        <li className="list-inline-item">
                          Add to{" "}
                          <a href="#" data-abc="true">
                            wishlist
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                      <h3 className="mb-0 font-weight-semibold">
                        {item.price}
                      </h3>
                      <div>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="text-muted">1985 reviews</div>
                      <button
                        type="button"
                        className="btn btn-warning mt-4 text-white"
                        onClick={() => {
                          addToCart(item);
                          addedToast();
                        }}
                      >
                        <i className="icon-cart-add mr-2" /> Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
