package com.touche.backend.service;

import com.touche.backend.domain.Room;
import com.touche.backend.dto.RoomDTO;
import com.touche.backend.repository.RoomRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    @Transactional
    public Room createRoom(RoomDTO dto) {
        Room newRoom = toRoomModel(dto);
        return roomRepository.save(newRoom);
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Room with id='%d' not found!".formatted(id)));
    }

    private static Room toRoomModel(final RoomDTO dto) {
        return new Room();
    }
}
