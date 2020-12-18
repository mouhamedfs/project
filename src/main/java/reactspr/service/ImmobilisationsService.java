package reactspr.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactspr.domain.Immobilisation;
import reactspr.repository.ImmobilisationRepository;
@Service
@Transactional
public class ImmobilisationsService {

    private final ImmobilisationRepository immobilisationRepository;
    
    public ImmobilisationsService(ImmobilisationRepository immobilisationRepository) {
		this.immobilisationRepository = immobilisationRepository;
	}
 
    @Transactional
    public Page<Immobilisation> getAll(Pageable pageable) {
        return immobilisationRepository.findAll(pageable);
    }
}
