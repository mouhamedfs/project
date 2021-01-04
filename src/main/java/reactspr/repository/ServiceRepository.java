package reactspr.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import reactspr.domain.Service;

/**
 * Spring Data repository for the Service entity.
 */
@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
}
