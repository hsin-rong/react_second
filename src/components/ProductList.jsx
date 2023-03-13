import products from "../json/products.json";
import {Row, Col} from "antd";

export default function ProductList(){
    return(
        <Row gutter={[32, 32]}>
            {products.map(product=>
                <Col
                    key={product.id}
                    sm={{span:12}}
                    lg={{span:8}}
                    xl={{span:6}}
                    xxl={{span:4}}>
                        <ProductItem product={product}/>
                </Col>
            )}
        </Row>

        /*<div className="row">
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
            <section className="mt-4 col-sm-6 col-lg-3"></section>
        </div>*/
    );  
}