package reactspr.web.rest;

import reactspr.domain.AuditEntity;
import reactspr.repository.AuditEntityRepository;
import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * REST controller for getting the {@link AuditEvent}s.
 */
@RestController
@RequestMapping("/management/auditsentity")
public class AuditEntityResource {

    private final AuditEntityRepository auditEntityRepository;

    public AuditEntityResource(AuditEntityRepository auditEntityRepository) {
        this.auditEntityRepository = auditEntityRepository;
    }


    /**
     * {@code GET /audits} : get a page of {@link AuditEvent}s.
     *
     */
    @GetMapping
    public List<AuditEntity> getAll() {
        return auditEntityRepository.findAll();
    }

}
