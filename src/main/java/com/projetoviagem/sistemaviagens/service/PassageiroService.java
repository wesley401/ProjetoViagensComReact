package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.Passageiro;


import java.util.List;

public interface PassageiroService {
    public Passageiro salvarPassageiros(Passageiro passageiro);
    public List<Passageiro> getAllPassageiros();
}
