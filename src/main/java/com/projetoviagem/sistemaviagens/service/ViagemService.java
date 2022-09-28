package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.Viagem;

import java.util.List;

public interface ViagemService {
    public Viagem salvarViagens(Viagem viagem);
    public List<Viagem> getAllViagens();
}
