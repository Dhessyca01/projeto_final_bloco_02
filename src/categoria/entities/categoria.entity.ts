import { IsNotEmpty } from "class-validator";
import { Column, Entity, /**OneToMany**/ PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_categorias" })
export class Categoria{
  
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    tipo:string;
 
    //Não tem como classificar produto nesse momento devido a cração de CRUD
    //na terceira etapa
    //@OneToMany(() => Produto, (produto) => produto.categoria)
    //produto: Produto[];

}