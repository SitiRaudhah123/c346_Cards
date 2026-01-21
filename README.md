[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/zhKErlDQ)
# Kpop Album App

This mobile application is a K-pop album app designed to help users explore and discover K-pop albums easily. The app provides a centralized platform where users can view a list of K-pop albums with the album name.

---

## What is this app about?

The app focuses on displaying K-pop albums from various artists and groups. Users can browse through a list of albums and quickly search for specific albums they are interested in. The goal is to provide K-pop fans with an organized and user-friendly way to access album details in one place.

---

## Notable features of the app
- Album Listing: Displays a list of K-pop albums
- Search Functionality: Allows users to search for a specific album by name
- User-Friendly Interface: Simple and intuitive design for easy navigation

---

## Backend Web Service

This app communicates with a backend web service using HTTP requests.  
The table below documents the available API routes used by the mobile application.

### API Routes Documentation

| Route        | HTTP Method | Description               | Request Body / Parameters |
|--------------|------------|---------------------------|----------------------------|
| `/album`     | GET | Retrieves all albums      | None |
| `/album/:id` | PUT | Updates an existing album | URL param + JSON body |
| `/album/:id` | DELETE | Deletes an album          | URL param |

---

## Screenshots of the mobile app
![gif](KPOP_Album.gif)
---

## Video walkthrough of the app

A short video demonstrating the features and flow of the application:  
https://www.youtube.com/watch?v=somevideoplaceholder

---

## Team Contributions

As this is a team project, each member’s role and contributions are documented below.

| Name   |  Responsibilities |
|--------|------------------|
| Joanne | UI design, layout, screen navigation |
| Siti   | API routes, database integration |
| Lionel | Planning, coordination, documentation |

---
