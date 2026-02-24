import { MinusIcon, OctagonXIcon, PlusIcon, SquareCheckBigIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { products } from "./products";

export default function TableWithPagination() {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Kategoria</TableHead>
              <TableHead>Konwersja (PLN)</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Dodaj</TableHead>
              <TableHead>Usuń</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow className="odd:bg-muted/50" key={product.id}>
                <TableCell className="pl-4">{product.id}</TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>{product.status === "avaiable" ? <SquareCheckBigIcon color="green"/> : <OctagonXIcon color="red"/>}</TableCell>
                <TableCell>
                  <Button>
                    <PlusIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant={"destructive"}>
                    <MinusIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
