import { AddressCompany } from "./address-company"
import { Contact } from "./contact"

export interface Company {
    id: number
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    inscricaoEstadual: string
    contato: Contact
    endereco: AddressCompany
    fotoPerfil: string
    fotoCapa: string
    sobre: string
}
