package com.touche.backend.controller;

import com.touche.backend.domain.Room;
import com.touche.backend.dto.RoomDTO;
import com.touche.backend.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/rooms")
public class RoomController {

    private final RoomService roomService;

    @GetMapping
    public List<RoomDTO> findAllRooms() {
        List<Room> existedRooms = roomService.getAllRooms();
        return existedRooms.stream()
                .map(this::toRoomDTO)
                .collect(Collectors.toList());
    }

    @GetMapping(path = "/{id}")
    public RoomDTO findRoomById(@PathVariable(name = "id") long id) {
        Room existedRoom = roomService.getRoomById(id);
        return toRoomDTO(existedRoom);
    }

    private RoomDTO toRoomDTO(final Room room) {
        return new RoomDTO(
                room.getId(),
                room.getName(),
                room.getCapacity()
        );
    }
}
