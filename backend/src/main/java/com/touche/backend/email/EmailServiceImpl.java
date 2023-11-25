package com.touche.backend.email;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class EmailServiceImpl implements MailService {

    @Autowired
    private JavaMailSender javaMailSender;


    public void sendSimpleMessage(String to, String subject, String body) {
        try {

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("*****@gmail.com");
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);

            javaMailSender.send(message);
        } catch (Exception exception) {
            throw  new RuntimeException("Error while sending mail");
        }
    }
}
