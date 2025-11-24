import { Router } from "express";
import { libros } from "../data/libro.service";
import { Libro } from "../models/libro";

const router = Router();
let booksDB = [...libros]; // Copia modificable

// GET /api/books
router.get("/", (req, res) => {
  res.json(booksDB);
});

// GET /api/books/:id
router.get("/:isbn", (req, res) => {
  const isbn = (req.params.isbn);
  const book = booksDB.find((b) => b.isbn === isbn);

  if (!book) {
    return res.status(404).json({ message: "Libro no encontrado" });
  }

  res.json(book);
});

// POST /api/books
router.post("/", (req, res) => {
  const newBook: Libro = {
    id: Date.now(),
    ...req.body,
  };

  booksDB.push(newBook);
  res.status(201).json(newBook);
});

// DELETE /api/books/:id
router.delete("/:isbn", (req, res) => {
  const isbn = (req.params.isbn);
  booksDB = booksDB.filter((b) => b.isbn !== isbn);

  res.json({ message: "Libro eliminado" });
});

export default router;
