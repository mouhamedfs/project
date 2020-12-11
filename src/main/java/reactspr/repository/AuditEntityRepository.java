package reactspr.repository;

import reactspr.domain.AuditEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

/**
 * Spring Data JPA repository for the {@link PersistentAuditEvent} entity.
 */
public interface AuditEntityRepository extends JpaRepository<AuditEntity, Long> {
    List<AuditEntityRepository> findByPrincipal(String principal);
}
