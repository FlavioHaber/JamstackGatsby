import * as React from "react"
import Layout from "../components/layout"
import { useState, useEffect} from "react"
import ReactPaginate from "react-paginate"

const Paginacao = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => alert(error.message));
    }, []);

    const itemsPerPage = 6;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const handlePageChange = ({ selected: page}) => {
        setCurrentPage(page);
    }
    return (
        <Layout>
            <ReactPaginate
                activeClassName={"item_active"}
                breakLabel={'...'}
                containerClassName={'pagination'}
                nextLabel={">>"}
                onPageChange={handlePageChange}
                pageCount={totalPages}
                previousLabel={"<<"}
            />
            {currentItems.map(item => (
                <div key={item.id} className="post">
                    <h3>{item.id} - {item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
        </Layout>
    )
}

export default Paginacao

export const Head = () => <title>Paginação</title>