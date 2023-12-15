import { AddCart, Card, Description, ProductImg, Title } from './styles'

export type Props = {
    foto: string
    nome: string
    descricao: string
    id: number
}

const Product = ({foto, id, nome, descricao} : Props) => {
    return (
        <Card>
                <ProductImg src={foto} alt={nome} />
                <Title>{nome}</Title>
                <Description>{descricao}</Description>
                <AddCart>Adicionar ao carrinho</AddCart>
        </Card>
    )
}

export default Product