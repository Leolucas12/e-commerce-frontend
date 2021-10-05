import { AdminHeader } from "../components/AdminHeader";
import { ProductTable } from "../components/ProductTable";
import { Container, Content } from "../styles/Admin";

export function Admin() {
    return (
        <>
            <AdminHeader />
            <Container>
                <Content>
                    <ProductTable />
                </Content>
            </Container>
        </>
    )
}