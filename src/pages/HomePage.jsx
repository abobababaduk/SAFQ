import { useState } from "react";
import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import Slider from "../components/Slider/Slider"
import { products } from "../data"











export default function HomePage() {




    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')

    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    const filteredProducts = products.filter((item) =>

        item.name.toLowerCase().includes(query.toLocaleLowerCase())

    )

    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceDescending':
                return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            case 'nameA':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case 'nameZ':
                return [...products].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    };

    const fullSorting = sortProducts(sorting, filteredProducts)



    return (
        <>

            <main>

                <Banner />
                <a name="cat"></a>
                <h2>Каталог</h2>





                <div className="filtered">

                    <Filter sorting={sorting} onSortingChange={onSortingChange} />

                    <Search query={query} onChangeQuery={onChangeQuery} />

                </div>

                <div className="cards">

                    {
                        fullSorting.length ? (
                            fullSorting.map((product, index) => (
                                <Card key={index} {...product} />
                            ))
                        ) : (
                            <h2>По вашему запросу `{query}` ничего не найдено!</h2>
                        )}

                </div>











                {/* <div className="cards">



                    {products.map((product, index) => (
                        <Card key={index} {...product} />
                    ))}


                </div> */}


<a name="new"></a>
                <h2>Популярные товары</h2>

                <div className="favorites">

                    <Slider />

                </div>




            </main>



        </>
    )
}