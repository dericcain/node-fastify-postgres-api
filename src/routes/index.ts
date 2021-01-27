import {
  addNote,
  getNote,
  getNotes,
  deleteNote,
  updateNote,
} from '../controllers/order-notes.controller';
import { RouteOptions } from 'fastify';
import { AddOrderNoteSchema } from './documentation/notes.api';

const getCarsRoute: RouteOptions = {
  method: 'GET',
  url: '/api/notes',
  handler: getNotes,
};
const getCarRoute: RouteOptions = {
  method: 'GET',
  url: '/api/notes/:id',
  handler: getNote,
};
const postCarRoute: RouteOptions = {
  method: 'POST',
  url: '/api/notes',
  handler: addNote,
  schema: AddOrderNoteSchema,
};
const putCarRoute: RouteOptions = {
  method: 'PUT',
  url: '/api/notes/:id',
  handler: updateNote,
};
const deleteCarRoute: RouteOptions = {
  method: 'DELETE',
  url: '/api/notes/:id',
  handler: deleteNote,
};

const routes = [getCarsRoute, getCarRoute, postCarRoute, putCarRoute, deleteCarRoute];

export default routes;
