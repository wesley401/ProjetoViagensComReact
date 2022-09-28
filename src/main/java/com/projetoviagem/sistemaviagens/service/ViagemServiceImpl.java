package com.projetoviagem.sistemaviagens.service;


import com.projetoviagem.sistemaviagens.model.Viagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetoviagem.sistemaviagens.repository.ViagemRepository;

import java.util.List;

@Service
public class ViagemServiceImpl implements ViagemService{

    @Autowired
    private ViagemRepository viagemRepository;

    @Override
    public Viagem salvarViagens(Viagem viagem) {
        return viagemRepository.save(viagem);
    }

    @Override
    public List<Viagem> getAllViagens() {
        return viagemRepository.findAll();
    }
}
