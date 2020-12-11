package reactspr.service;
import reactspr.domain.AuditEntity;
import reactspr.repository.AuditEntityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
/**
 * Service for managing audit events.
 * <p>
 * This is the default implementation to support SpringBoot Actuator {@code AuditEventRepository}.
 */
@Service
@Transactional
public class AuditEntityService {

    private final Logger log = LoggerFactory.getLogger(AuditEntityService.class);

    private final AuditEntityRepository auditEntityRepository;

    public AuditEntityService(
        AuditEntityRepository auditEntityRepository) {

        this.auditEntityRepository = auditEntityRepository;
    }

    /**
     * Old audit events should be automatically deleted after 30 days.
     *
     * This is scheduled to get fired at 12:00 (am).
     */

    @Transactional
    public AuditEntity ajouter(AuditEntity auditEntity) {
        return auditEntityRepository.save(auditEntity);
    }

}
