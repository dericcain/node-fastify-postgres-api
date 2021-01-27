import boom from 'boom';
import { getManager } from 'typeorm';
import { OrderNote } from '../models/note';
import { FastifyRequest } from 'fastify';

export const getNotes = async (): Promise<OrderNote[]> => {
  try {
    return await getManager()
      .createQueryBuilder(OrderNote, 'order_notes')
      .from(OrderNote, 'note')
      .select('*')
      .execute();
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const getNote = async (req: FastifyRequest) => {
  try {
    return await getManager()
      .createQueryBuilder()
      .from(OrderNote, 'order_notes')
      .where('id = :id', { id: req.params.id })
      .execute();
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const addNote = async (req: FastifyRequest) => {
  try {
    const r = await getManager()
      .createQueryBuilder()
      .insert()
      .into(OrderNote)
      .values(req.body)
      .execute();
    return r;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const updateNote = async (req: FastifyRequest) => {
  try {
    return await getManager()
      .createQueryBuilder()
      .from(OrderNote, 'order_notes')
      .update(OrderNote)
      .set(req.body)
      .where('id = :id', { id: req.params.id })
      .execute();
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const deleteNote = async (req: FastifyRequest) => {
  try {
    return await getManager()
      .createQueryBuilder()
      .from(OrderNote, 'order_notes')
      .where('id = :id', { id: req.params.id })
      .softDelete();
  } catch (err) {
    throw boom.boomify(err);
  }
};
