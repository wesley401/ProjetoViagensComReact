package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.Passageiro;
import com.projetoviagem.sistemaviagens.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PassageiroServiceImpl implements PassageiroService{

    @Autowired
    private PassageiroRepository passageiroRepository;

    @Override
    public Passageiro salvarPassageiros(Passageiro passageiro) {
        return passageiroRepository.save(passageiro);
    }

    @Override
    public List<Passageiro> getAllPassageiros() {
        return passageiroRepository.findAll();
    }
}
