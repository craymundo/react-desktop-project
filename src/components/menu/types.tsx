export interface IProps {
    id: string;
    descripcion: string;
    onSelect: (id: string, descripcion: string) => void;
}