# 📚 **Readeck** — Your Personal Digital Library Platform!  
Readeck is a **self-hosted reading platform** that brings all your e-books, documents, and articles together in one beautifully organized and accessible space. Whether you're a bookworm, a student, or part of a reading club, Readeck makes reading and managing your content **a breeze**. 🌟

---

## ✨ **Features That Will Make You Love Reading Again**  
### 🔖 **Flexible File Support**
Readeck supports a wide variety of file formats:
- 📘 **EPUB**, **PDF** for your e-books
- 📚 **CBZ**, **CBR** for comic lovers
- 📄 Other documents? No problem!

### 🧑‍🤝‍🧑 **Multi-User Magic**  
- Each user gets **personalized reading progress tracking**.  
- Share your library with family, friends, or team members.  

### 🎯 **Efficient Organization**  
- **Searchable library**: Find what you need in seconds.  
- **Tags and categories**: Say goodbye to clutter!  

### 🌈 **Reading Experience Enhanced**
- Bookmark, highlight, and annotate your favorite parts.  
- Responsive design works flawlessly on mobile, tablet, or desktop.  

### 🛠️ **Powerful Tools for Power Readers**
- Upload files easily with **drag-and-drop**.  
- Sync your progress across devices.  
- Enjoy offline access with the **Progressive Web App (PWA)**.  

### 🔐 **Privacy Matters**
- 100% self-hosted.  
- Your library is yours and yours alone.  

---

## 🗂️ **Folder Info**  

| 📂 **Host Folder**                       | 📦 **Container Folder**  |
|------------------------------------------|--------------------------|
| `/runtipi/app-data/readeck/config`       | `/config`                |
| `/runtipi/app-data/readeck/data`         | `/readeck`              |
| `/runtipi/media/data/books/ebooks`       | `/ebooks`                |
| `/runtipi/media/data/documents`          | `/documents`             |

---

## 🛠️ **Quick Start with Docker Compose**  
Ready to get started? Here's all you need!  

```yaml
version: "3.9"

services:
  app:
    image: codeberg.org/readeck/readeck:latest
    container_name: readeck
    depends_on:
      - db
    ports:
      - 8000:8000
    environment:
      - READECK_DATABASE_SOURCE=postgres://readeck:password@readeck-db:5432/readeck
      - READECK_LOG_LEVEL=info
      - READECK_SERVER_HOST=0.0.0.0
      - READECK_SERVER_PORT=8000
      - READECK_SERVER_PREFIX=/
      - READECK_ALLOWED_HOSTS=yourdomain.com
    volumes:
      - /your/path/readeck/config:/config
      - /your/path/readeck/data:/readeck
    networks:
      - default
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    container_name: readeck-db
    environment:
      - POSTGRES_DB=readeck
      - POSTGRES_USER=readeck
      - POSTGRES_PASSWORD=password
    volumes:
      - /your/path/readeck-db:/var/lib/postgresql/data
    networks:
      - default
    restart: unless-stopped

volumes:
  readeck-data:
  readeck-db:
```

---

## 🖥️ **Why Choose Readeck?**  
- 🌍 **Freedom**: It's **your library**—hosted your way!  
- 🛡️ **Security**: No third parties snooping on your reading habits.  
- 🔧 **Customization**: Open-source means endless possibilities.  

---

🚀 **Ready to dive in?** Head to [Readeck Docs](https://readeck.org/en/docs/) for setup instructions and tips.  
📣 **Need help?** Join the community on [Codeberg](https://codeberg.org/readeck/readeck)!  

Let Readeck be your personal reading sanctuary. Happy reading! 📖✨
