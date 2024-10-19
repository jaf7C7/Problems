'''
Online cloud reading application
--------------------------------

Similar to amazon kindle (for short stories).

We need help designing actual application (code that implements this).

A few thing we're looking for:
    - Users have a library of books that they can add to or remove from
    - Users can set a book from their library as active
    - The reading appication remembers where a user left off in a given book
    - The reading application only displays a page of text at a time in the
      active book
    - The platform is multi-user and the pool of available books are shared
      between users, though two users can be reading the same book in different
      places at the same time

Source: https://www.youtube.com/watch?v=1qw5ITr3k9E
'''


class Library:
    """A user's collection of books and book metadata"""

    def __init__(self):
        self.books = []
        self.active_book = None

    def select_book(self, book_id):
        # TODO: Book not found
        self.active_book = self.books[book_id]
        self.display_page()

    def add_book(self, title, content):
        self.books.append([Book(title, content), 1])

    def remove_book(self, book_id):
        # TODO: what if book not in self.books?
        del self.books[book_id]

    def display_page(self):
        pages = self.active_book.paginate(self._get_page_size)
        self.display(pages[self.active_book['current_page']])

    def select_page(self, page_number):
        # TODO: Page not found
        self.active_book.current_page = page_number

    def next_page(self):
        self.active_book.current_page += 1
        self.display_page()

    def get_page_size(self):
        # XXX: Pseudocode
        return some_function_of(self.font_size, self.display_resolution)

    def next_page(self):
        self.display_page(self.active_book.current_page + 1)


class Book:

    def _init__(self, id, title, content):
        self.id = id
        self.title = title
        self.content = content
        self.current_page = None

    def paginate(self, page_size):
        return [
            self.content[i:i + page_size]
            for i in range(0, len(self.content), page_size)
        ]
